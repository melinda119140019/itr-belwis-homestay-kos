// app/about/page.tsx
import Image from "next/image";

const InventarisPage = () => {
  return (
    <div>

      <button className="w-[10rem] bg-green-500 text-white text-[2rem] rounded-[15px]">
          <h1>Klik Saya</h1>
      </button>


      <div className="max-w-8xl mx-auto px-4 py-16 space-y-24">
        <h1>Inventaris</h1>
      </div>
      <div className="max-w-8xl mx-auto px-4 py-16 space-y-24">
     <h1>Kos Laki-laki</h1>
     </div>
     <div className="max-w-8xl mx-auto px-4 py-16 space-y-24">
     <h1>Kos Perempuan</h1>
     </div>

    </div>
  )
  
};

export default InventarisPage;
