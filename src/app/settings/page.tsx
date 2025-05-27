// app/about/page.tsx
import Image from "next/image";

const SettingsPage = () => {
  return (
    <div>
        <div className="max-w-8xl mx-auto px-4 py-16 space-y-24">
        <h1>Pengaturan</h1>
        </div>

     <div id="element induk" className=" flex flex-col gap-2">
      
      <button className="w-[10rem] bg-green-500 text-white text-[15px] rounded-[1rem] hover:bg-yellow-500">
            <h1>Akun</h1>
        </button>

        <button className="w-[10rem] bg-green-500 text-white text-[15px] rounded-[1rem] hover:bg-yellow-500">
            <h1>Kos Laki-Laki</h1>
        </button>

        <button className="w-[10rem] bg-green-500 text-white text-[15px] rounded-[1rem] hover:bg-yellow-500">
            <h1>Kos Perempuan</h1>
        </button>
   </div>
</div>
  )
  
};

export default SettingsPage;
