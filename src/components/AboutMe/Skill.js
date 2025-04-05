import { useEffect, useRef, useState } from "react";
import { backendSkills, devopsSkills, frontendSkills, machineLearningSkills, toolSkills } from "../../constants";


const Skill = () => {

    return (
        <div className="py-12">
            <div className="text-center text-3xl font-bold underline">My Skills</div>

            <div className='mt-10'>
                <div className="text-center text-xl font-bold italic">Front End Development</div>
                <div className="mt-8 flex items-center justify-center flex-wrap sm:gap-x-16 gap-x-8 gap-y-6">
                    {
                        frontendSkills.map(el => (
                            <SkillBox skill={el} />
                        ))
                    }
                </div>
            </div>

            <div className="mt-16">
                <div className="text-center text-xl font-bold italic">Back End Development</div>
                <div className="mt-8 flex items-center justify-center flex-wrap sm:gap-x-16 gap-x-8 gap-y-6">
                    {
                        backendSkills.map(el => (
                            <SkillBox skill={el} />
                        ))
                    }
                </div>
            </div>

            <div className="mt-16 md:flex gap-x-20">
                <div className="md:w-1/2">
                    <div className="text-center text-xl font-bold italic">Dev Ops</div>
                    <div className="mt-8 flex items-center justify-center flex-wrap sm:gap-x-16 gap-x-8 gap-y-6">
                        {
                            devopsSkills.map(el => (
                                <SkillBox skill={el} />
                            ))
                        }
                    </div>
                </div>

                <div className="md:w-1/2 md:mt-0 mt-16">
                    <div className="text-center text-xl font-bold italic">Machine Learning</div>
                    <div className="mt-8 flex items-center justify-center flex-wrap sm:gap-x-16 gap-x-8 gap-y-6">
                        {
                            machineLearningSkills.map(el => (
                                <SkillBox skill={el} />
                            ))
                        }
                    </div>
                </div>
            </div>

            <div className="mt-16">
                <div className="text-center text-xl font-bold italic">Software & Tools</div>
                <div className="mt-8 flex items-center justify-center flex-wrap sm:gap-x-16 gap-x-8 gap-y-6">
                    {
                        toolSkills.map(el => (
                            <SkillBox skill={el} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

const SkillBox = ({ skill }) => {
    const [isVisible, setIsVisible] = useState(false);
    const elementRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 1 }
        );

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => {
            if (elementRef.current) {
                observer.unobserve(elementRef.current);
            }
        };
    }, []);

    return (
        <div ref={elementRef} className={`self-stretch flex flex-col items-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-auto' : 'opacity-0 -translate-y-20'}`}>
            <div className="grow flex items-center mb-2">
                <img src={skill.picture} className="md:w-12 w-8" />
            </div>
            <div className="mt-auto">{skill.name}</div>
        </div>
    )
}

export default Skill;
