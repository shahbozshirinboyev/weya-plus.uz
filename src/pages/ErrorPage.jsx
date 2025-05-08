import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import ThemeSwitcher from "../components/ui/ThemeSwitcher";

export default function ErrorPage() {
  const videoRef = useRef();

  useEffect(() => {
    videoRef.current?.play();
  }, []);

  return (
    <div className="container mx-auto px-3 flex justify-center items-center min-h-screen">
      <div className="absolute top-5 right-5">
        <ThemeSwitcher />
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="mockup-code w-full max-w-xl z-10 rounded-md bg-gray-900"
      >
        <pre data-prefix="$">
          <code className="text-xs lg:text-sm">yo‘ldan adashdik</code>
        </pre>
        <pre data-prefix=">" className="text-warning">
          <code className="text-xs lg:text-sm">manzilni qidirmoqdamiz...</code>
        </pre>
        <pre
          data-prefix=">"
          className="bg-warning text-warning-content font-bold"
        >
          <code className="text-xs lg:text-sm"><span className="text-red-500">404 xato: </span>Bunday sahifa mavjud emas</code>
        </pre>
        <pre data-prefix=">" className="">
          <code className="text-xs lg:text-sm">Yangi yo‘l bosh sahifadan boshlanadi</code>
        </pre>
        <pre data-prefix=">" className="pt-2">
          <code>
            <a href="/" className="btn btn-xs btn-info  shadow-none rounded-md">
              Bosh sahifa
            </a>
          </code>
        </pre>
      </motion.div>
    </div>
  );
}
