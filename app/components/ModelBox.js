'use client';
import React, { useEffect, useRef, useState } from "react"
import Modal from "react-modal";
import close from "/public/svg/close.svg"
import Image from "next/image";
// import { AiOutlineCloseCircle } from "react-icons/ai"
// Modal.setAppElement("#root");

function ModalBox({ children, dOpen, dClose, isClosable, small }) {
    const [customStyles, setCustomStyles] = useState({})
    const modalRef = useRef(null);

    useEffect(() => {
        let regexp = /android|iphone|kindle|ipad/i;
        let isMobileDevice = regexp.test(navigator.userAgent);
        let customStyle = {}
        if (isMobileDevice) {
            customStyle = {
                content: {
                    top: '20%',
                    left: '2%',
                    right: '2%',
                    bottom: 'auto',
                    borderRadius: "15px",
                    // overflow: "hidden",
                    // marginRight: '-50%',
                    //transform: 'translate(-50%, -50%)',
                    padding: "0px",
                },
            };
        } else {
            customStyle = {
                content: {
                    top: '50%',
                    left: '50%',
                    right: 'auto',
                    bottom: 'auto',
                    borderRadius: "30px",
                    // overflow: "hidden",
                    // marginRight: '-50%',
                    transform: 'translate(-50%, -50%)',
                    padding: "0px",
                },
            };
        }
        setCustomStyles(customStyle)
    }, [])



    function handleClickOutside(event) {
        if (!isClosable) return
        if (modalRef?.current && !modalRef?.current?.contains(event.target)) {
            dClose()
        }
    }
    useEffect(() => {
        if (!dOpen && !isClosable) {
            document.addEventListener("click", handleClickOutside);
        }
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
        // eslint-disable-next-line
    }, [modalRef]);

    function handleCose() {
        if (isClosable) dClose()
    }
    return (
        <Modal
            isOpen={dOpen}
            style={customStyles}
            onRequestClose={handleCose}
        >
            {!isClosable ?
                <div className="modal_header">
                    <div className="close_button p-5 flex justify-end" >
                        <Image src={close} className="cursor-pointer" onClick={dClose} width={18} height={18} alt="close" />
                    </div>
                </div> : null}
            <div className={small ? "modal_box_container_small" : "modal_box_container"} ref={modalRef}>
                {children}
            </div>
        </Modal>
    )
}

export default ModalBox;
