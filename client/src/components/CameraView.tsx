import React, { useRef, useState, useCallback } from "react";
import Webcam from "react-webcam";
import { Camera, Upload, RefreshCw, Scan, Focus } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CameraViewProps {
  onAnalyze: (imageSrc: string) => void;
  isAnalyzing: boolean;
  results: any;
  onReset: () => void;
}

export default function CameraView({ onAnalyze, isAnalyzing, results, onReset }: CameraViewProps) {
  const webcamRef = useRef<Webcam>(null);
  const [mode, setMode] = useState<'camera' | 'upload'>('camera');
  const [imageSrc, setImageSrc] = useState<string | null>(null);

  const capture = useCallback(() => {
    if (webcamRef.current) {
      const imageSrc = webcamRef.current.getScreenshot();
      if (imageSrc) {
        setImageSrc(imageSrc);
        onAnalyze(imageSrc);
      }
    }
  }, [webcamRef, onAnalyze]);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageSrc(reader.result as string);
        onAnalyze(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const reset = () => {
    setImageSrc(null);
    onReset();
  };

  return (
    <div className="flex flex-col gap-4">
      {/* Viewport */}
      <div className="relative aspect-video bg-black/50 rounded-xl overflow-hidden border border-white/5 group">
        {!imageSrc ? (
          <>
            {mode === 'camera' ? (
              <Webcam
                audio={false}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
                videoConstraints={{ facingMode: "environment" }}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center text-muted-foreground hover:bg-white/5 transition-colors relative">
                <Upload className="w-12 h-12 mb-4 opacity-50" />
                <p className="font-mono text-sm">Upload Image</p>
                <input 
                  type="file" 
                  accept="image/*" 
                  className="absolute inset-0 opacity-0 cursor-pointer"
                  onChange={handleFileUpload}
                  data-testid="input-image-upload"
                />
              </div>
            )}
            
            {/* Cyberpunk HUD overlays */}
            {mode === 'camera' && (
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-white/20 rounded-full"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-primary/50"></div>
                <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-primary/50"></div>
                <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-primary/50"></div>
                <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-primary/50"></div>
              </div>
            )}
          </>
        ) : (
          <div className="relative w-full h-full">
            <img src={imageSrc} alt="Captured" className="w-full h-full object-contain bg-black" />
            
            {/* Analysis Overlay */}
            {isAnalyzing && (
              <div className="absolute inset-0 bg-primary/10 flex flex-col items-center justify-center backdrop-blur-[2px]">
                <Scan className="w-16 h-16 text-primary animate-[spin_3s_linear_infinite]" />
                <div className="mt-4 font-mono text-primary text-sm tracking-widest bg-black/50 px-4 py-1 rounded">
                  ANALYZING NEURAL PATTERNS...
                </div>
              </div>
            )}

            {/* Bounding Box (Simulated) */}
            {results && results.bbox && (
              <div 
                className="absolute border-2 border-primary bg-primary/10 transition-all duration-500 animate-in fade-in zoom-in"
                style={{
                  top: `${results.bbox.y}%`,
                  left: `${results.bbox.x}%`,
                  width: `${results.bbox.w}%`,
                  height: `${results.bbox.h}%`
                }}
              >
                <div className="absolute -top-6 left-[-2px] bg-primary text-black font-mono text-xs px-2 py-0.5 whitespace-nowrap font-bold">
                  {results.category.toUpperCase()} // {results.confidence}%
                </div>
                {/* Bounding box corners */}
                <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-white -translate-x-1 -translate-y-1"></div>
                <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-white translate-x-1 -translate-y-1"></div>
                <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-white -translate-x-1 translate-y-1"></div>
                <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-white translate-x-1 translate-y-1"></div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Controls */}
      <div className="flex items-center justify-between gap-4">
        <div className="flex bg-black/40 rounded-lg p-1 border border-white/5">
          <Button 
            variant="ghost" 
            size="sm"
            onClick={() => setMode('camera')}
            className={`rounded-md ${mode === 'camera' ? 'bg-primary/20 text-primary' : 'text-muted-foreground'}`}
            disabled={!!imageSrc || isAnalyzing}
          >
            <Camera className="w-4 h-4 mr-2" />
            Camera
          </Button>
          <Button 
            variant="ghost" 
            size="sm"
            onClick={() => setMode('upload')}
            className={`rounded-md ${mode === 'upload' ? 'bg-primary/20 text-primary' : 'text-muted-foreground'}`}
            disabled={!!imageSrc || isAnalyzing}
          >
            <Upload className="w-4 h-4 mr-2" />
            Upload
          </Button>
        </div>

        <div className="flex gap-2">
          {imageSrc ? (
            <Button 
              variant="outline" 
              onClick={reset}
              className="border-white/10 hover:bg-white/5 text-foreground"
              data-testid="button-reset-camera"
            >
              <RefreshCw className="w-4 h-4 mr-2" />
              Reset
            </Button>
          ) : (
            mode === 'camera' && (
              <Button 
                onClick={capture} 
                className="bg-primary hover:bg-primary/80 text-black font-bold shadow-[0_0_15px_rgba(0,255,128,0.5)] border-0"
                data-testid="button-capture"
              >
                <Focus className="w-4 h-4 mr-2" />
                Initialize Scan
              </Button>
            )
          )}
        </div>
      </div>
    </div>
  );
}