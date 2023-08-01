import { useState, useRef, useEffect } from "react";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import { data } from "../data/flagsData";
import Image from "next/image";
import "@splidejs/react-splide/css";

export default function LanguageSelector() {
    const [activeCountry, setActiveCountry] = useState(null);
    const splideRef = useRef(null);

    useEffect(() => {
        function handleActiveSlide() {
            const activeSlide = splideRef.current.splide.Components.Elements.slides.filter(
                (slide) => slide.classList.contains("is-active")
            )[0];
            if (activeSlide) {
                const countryName = activeSlide.dataset.countryName;
                setActiveCountry(countryName);
            }
        }

        handleActiveSlide();

        // Add event listener for the moved event
        const splideInstance = splideRef.current.splide;
        splideInstance.on("moved", handleActiveSlide);

        // Remove the event listener when the component unmounts
        return () => {
            splideInstance.off("moved", handleActiveSlide);
        };
    }, []);

    return (
        <>
            <Splide
                options={{
                    type: "loop",
                    autoWidth: true,
                    perPage: 1,
                    arrows: false,
                    gap: 20,
                    focus: "center",
                    pagination: false,
                    autoplay: true,
                    live: true,
                    lazyLoad: "nearby",
                }}
                className="splide__container"
                ref={splideRef}
            >
                {data &&
                    data.map((country) => {
                        return (
                            <SplideSlide key={country.id} className="py-2" data-country-name={country.name}>
                                <div className="country_image">
                                    <Image src={require(`../assets/flags/${country.image}`)} alt={country.name} width={100} height={100} />
                                </div>
                            </SplideSlide>
                        );
                    })}
            </Splide>
            <div className="text-center font-semibold text-2xl">
                {activeCountry || ""}
            </div>
        </>
    );
}
