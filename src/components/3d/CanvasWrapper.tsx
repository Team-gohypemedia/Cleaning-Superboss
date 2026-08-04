"use client";

import dynamic from "next/dynamic";
import { Loader2 } from "lucide-react";

const Scene3D = dynamic(() => import("@/components/3d/Scene3D"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center bg-transparent">
      <Loader2 className="w-8 h-8 text-indigo-400 animate-spin opacity-50" />
    </div>
  ),
});

export default function CanvasWrapper() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      <Scene3D />
    </div>
  );
}
