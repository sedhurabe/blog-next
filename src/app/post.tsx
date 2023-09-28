
type Props = {
    handleEdit: (el: {
        id: number;
        author: { name: string; role: string };
        date: string;
        title: string;
        content: string;
    }, action: string) => void;
    data: Array<{
        author: { name: string, role: string }; id: number; date: string; title: string; content: string
    }>;
};

const Post: React.FC<Props> = ({ data, handleEdit}) => {
    const list = data.map((el, index) => (
        <div key={index} className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-1">
            <article className="flex flex-col items-start justify-between relative">
                <div className="actions absolute">
                    <span onClick={() => handleEdit(el, 'Edit')}>Edit</span> <span onClick={() => handleEdit(el, 'Delete')}>Delete</span>
                </div>
                <div className="flex items-center gap-x-4 text-xs">
                    <time dateTime="2020-03-16" className="text-gray-500">
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
    ));

    return <>{data.length === 0 ? <div className="norecord">No Record found </div> : list}</>;
};

export default Post;