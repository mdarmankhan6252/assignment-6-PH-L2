import { Loader } from "lucide-react";

const Loading = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white/30 backdrop-blur-sm z-50">
      <Loader size={80} className="text-purple-600 animate-spin" />
    </div>
  );
};

export default Loading;
