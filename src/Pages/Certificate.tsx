import { useCallback, useEffect, useRef, useState } from 'react';
import logo from '../assets/gnatureslogo1.png';
import sign1 from '../assets/sign1.png';
import sign2 from '../assets/sign2.png';
import award from '../assets/award.png';
// import award1 from '../assets/award1.png';
import { toPng } from 'html-to-image';
import watermark from '../assets/watermark.jpg';

const Certificate = () => {
    const ref = useRef(null);

    const onButtonClick = useCallback(() => {
        if (ref.current === null) {
            return;
        }

        toPng(ref.current, { cacheBust: true })
            .then((dataUrl) => {
                const link = document.createElement('a');
                link.download = 'my-certificate.png';
                link.href = dataUrl;
                link.click();
            })
            .catch(() => {
                alert("An error occurred while generating your certificate. Please try again.");
            });
    }, [ref]);

    const [formData, setFormData] = useState({
        name: '',
    });

    const [currentDate, setCurrentDate] = useState('');

    // Function to generate current date in a formatted string
    const generateCurrentDate = () => {
        const today = new Date();
        const day = today.getDate();
        const month = today.toLocaleString('en-US', { month: 'long' });
        const year = today.getFullYear();
        
        // Add ordinal suffix to day
        const getOrdinalSuffix = (day: number) => {
            if (day > 3 && day < 21) return 'TH';
            switch (day % 10) {
                case 1: return 'ST';
                case 2: return 'ND';
                case 3: return 'RD';
                default: return 'TH';
            }
        };
        
        return `${day}${getOrdinalSuffix(day)} ${month.toUpperCase()} ${year}`;
    };

    useEffect(() => {
        const storedName = localStorage.getItem('name');
        setFormData({
        name: storedName || '',
        });
        
        // Generate current date when component mounts/page reloads
        setCurrentDate(generateCurrentDate());
    }, []);

    
    return (
        <>
            <div className="min-w-[1000px] flex justify-center items-center min-h-screen">
                <div
                ref={ref}
                className="flex flex-col justify-center items-center bg-white relative"
                >
                    <img src={watermark} alt="genes" className='absolute w-[1000px] -mt-52 h-[800px] opacity-30 z-0 ' />
                    <div className="relative w-[1000px] h-[600px] border-[20px] m-10 border-green-500 flex">
                        <div className="flex flex-col mx-auto">
                            <div className="flex text-center mx-auto -my-10">
                                <p className="mr-2">
                                    <img src={logo} alt="logo" className="w-[150px]" />
                                </p>
                                {/* <p className="w-[1px] h-[50px] bg-purple-600 mt-4"></p> */}
                                {/* <p className="mt-5 pr-16 font-bold text-xs w-[200px]">
                                Genomac Institute Inc.
                                <p className="-ml-2">| USA Incorporated</p>
                                </p> */}
                            </div>

                            <div className="text-center mx-auto">
                                <p className="uppercase font-semibold text-3xl">
                                certificate of completion
                                </p>
                                <p className="text-center italic font-bold">
                                this certificate is presented to:
                                </p>
                            </div>

                            <div className="text-center mx-auto pt-5 pb-10 w-[1000px] h-[200px] mt-5">
                                <p className="text-3xl font-semibold border-b-2 mx-[200px] pb-2 mt-4 mb-1 border-green-800 ">
                                {formData.name}
                                </p>
                                <p className="mx-28 pt-3 text-lg">
                                for successfully completing the course on
                                </p>
                                <p className='uppercase text-xl font-bold' >
                                Plant Genomics: Variant Analysis and Molecular Characterization
                                </p>
                                <p className='mx-28 text-lg' > organized by G-Natures.</p>
                                <p className="font-bold text-lg">{currentDate}</p>
                            </div>

                            <div className="flex justify-between mx-32">
                                <div className="">
                                <p className="border-b-2 border-dashed border-purple-800 w-[200px]">
                                    <img
                                    src={sign1}
                                    alt="signature"
                                    className="w-[200px] h-[150px] -mb-10"
                                    />
                                </p>
                                <p className="text-base font-semibold">
                                    Oluwaseyi Abraham Olawale
                                </p>
                                <p className="text-xs font-medium">
                                    Founder & CEO of Genomac Holdings.
                                </p>
                                </div>

                                <div className="w-[400px] h-auto -mt-[30px] -ml-[400px] -mr-[320px] z-10">
                                <img src={award} alt="award" />
                                </div>

                                <div className="-mt-3">
                                <p className="border-b-2 border-dashed border-purple-800 w-52">
                                    <img
                                    src={sign2}
                                    alt="signature"
                                    className="w-[150px] h-[200px] -mb-20"
                                    />
                                </p>
                                <p className="text-base font-semibold">
                                    Oluwaseyi Praise Ayomide
                                </p>
                                <p className="text-xs text-center font-medium">
                                    Director, G-Natures.
                                </p>
                                </div>
                            </div>

                            {/* <div className="w-[150px] absolute top-8 left-14">
                                <img src={award1} alt="award" />
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex justify-center -mt-9">
                <button
                className="bg-green-500 p-2 rounded-xl hover:bg-purple-700 text-white z-10"
                onClick={onButtonClick}
                >
                Download Certificate
                </button>
            </div>
        </>
    );
}

export default Certificate;