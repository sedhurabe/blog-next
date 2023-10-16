'use client'
import { useSearchParams } from "next/navigation";

const Details = () => {
  const searchParams = useSearchParams()
  const title: any = searchParams.get('data');
  const el = JSON.parse(title);
  return (
    <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
    <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-1">
            <article className="flex flex-col items-start justify-between relative">
                <div className="flex items-center gap-x-4 text-xs">
                    <time className="text-gray-500">
                        {new Date(el.date).toLocaleString()}
                    </time>
                </div>
                <div className="group relative">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    {el?.title}
                    </h3>
                    <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{el.content}</p>
                </div>
                <div className="relative mt-8 flex items-center gap-x-4">
                    <div className="text-sm leading-6">
                        <p className="font-semibold text-gray-900">
                            {el?.author?.name}
                        </p>
                        <p className="text-gray-600">{el?.author?.role}</p>
                    </div>
                </div>
            </article>
        </div>
        </div></div>
  )
}

export default Details;
