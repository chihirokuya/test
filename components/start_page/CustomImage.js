import Image from "next/image"

function CustomImage({ src, title, description }) {
    return (
        <div className="relative flex justify-center items-center h-fit group transition duration-750 drop-shadow-xl">
            <Image
                src={src}
                width={200}
                height={300}
                className="object-cover rounded-lg group-hover:opacity-50 transition duration-750"
            />
            {/* cover */}
            <div className="absolute top-0 left-0 w-full h-full rounded-lg bg-zinc-700 z-30 opacity-0 group-hover:opacity-25 transition duration-750"/>

            <div className="absolute w-full h-full z-50 top-0 left-0 flex-col flex justify-center items-center opacity-0 group-hover:opacity-100 transition duration-750 space-y-9">
                <h1 className="text-white text-[50px]">{title}</h1>
                <p className="text-white text-[20px]">{description}</p>
            </div>
        </div>
    )
}

export default CustomImage