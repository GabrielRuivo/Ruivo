import Image from "next/image";

export default function Technologies(
  { 
    srcImage, 
    techName 
  }: { 
    srcImage: string, 
    techName: string 
  }
) {
  return (
    <div className='flex items-center'>
      <div className="text-3xl py-5">{techName}</div>
      <Image 
        className='ml-2'
        src={srcImage} 
        height={30} 
        width={30} 
        alt={techName + 'Icon'} 
      />
    </div>
  )
}