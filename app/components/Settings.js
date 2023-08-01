import { useState } from "react";
import Image from "next/image"
import ModalBox from "./ModelBox"
import settingsIcon from "/public/svg/settings.svg";
import arrowRight from "/public/svg/arrow-right.svg"
import arrowDown from "/public/svg/arrow-down.svg"
const data = [
    {
        id: 1,
        title: "Language",
        val: "English",
        src: arrowRight,
    },
    {
        id: 2,
        title: "Text Color",
        val: "White",
        src: arrowRight,
    },
    {
        id: 3,
        title: "Text Size",
        val: "X-Large",
        src: arrowDown,
    },
    {
        id: 4,
        title: "Theme",
        val: "Custom",
        src: arrowDown,
    },
]
export default (props) => {
    const [themeSelected, setThemeSelected] = useState("")
    const [textSelected, setTextSelected] = useState("")
    const textSizes = ['text-lg', 'text-xl', 'text-2xl', 'text-3xl']
    return (
        <>
            <ModalBox {...props}>
                <div className="md:hidden" onClick={props.dClose}>
                    <Image src={arrowDown} alt="close drawer" className="mx-auto" width={30} height={30} />
                </div>
                <div className="title text-center text-2xl font-semibold py-2 flex justify-center items-center">
                    <Image src={settingsIcon} alt="settings icon" className="mr-2" width={30} height={30} />
                    Settings
                </div>
                <div className="px-5 flex flex-col gap-5 w-96 mx-auto text-">
                    {data.map(item => {
                        return (
                            <div className="flex justify-between items-start" key={item.id}>
                                <span className="text-lg font-semibolde">{item.title}</span>
                                <span className="text-zinc-300 leading-relaxed flex items-center cursor-pointer">
                                    {item.val}
                                    <Image src={item.src} alt="expand icon" className="" width={22} height={22} />
                                </span>
                            </div>
                        )
                    })}
                </div>
                <div className="theme_selector mx-auto my-3">
                    {
                        Array.from({ length: 4 })
                            .map((_, ind) =>
                                <span
                                    className={themeSelected == ind ? 'active' : ''}
                                    key={ind}
                                    onClick={() => setThemeSelected(ind)}
                                ></span>
                            )
                    }
                </div>
                <div className="flex justify-evenly items-baseline w-96 mx-auto mb-4">
                    {
                        textSizes?.map(size =>
                            <h4
                                className={`cursor-pointer ${size} ${textSelected == size ? 'text-indigo-400' : ''}`}
                                onClick={() => setTextSelected(size)}
                                key={size}
                            >
                                Aa
                            </h4>
                        )
                    }
                </div>
            </ModalBox>
        </>
    )
}