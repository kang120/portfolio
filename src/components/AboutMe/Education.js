import { educations } from "../../constants";

const Education = () => {
    return (
        <div className="py-12">
            <div className="text-center text-3xl font-bold underline">Educations</div>

            <div className="grid grid-cols-3 mt-10 flex gap-3 flex-wrap">
                {
                    educations.map(el => (
                        <div className='px-6 py-5 bg-gradient-to-r from-indigo-50 to-white rounded-xl border border-gray'>
                            <div className="flex items-center">
                                <div className="text-sm">{el.period}</div>
                                <div className={`ms-auto px-3 py-1 text-xs rounded-xl font-semibold ${el.background} ${el.color}`}>{el.level}</div>
                            </div>
                            <div className="mt-3 font-bold">{el.school}</div>
                            <div className="text-sm italic">{el.location}</div>
                            <div className="mt-3">{el.course}</div>
                            <div className="mt-3 text-sm">{el.result}</div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Education;
