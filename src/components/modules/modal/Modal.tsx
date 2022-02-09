import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ModalServcie from "./ModalService";
interface ModalProps {
    title: string;
    message: string;
    onConfirm: React.MouseEventHandler;
}

function Backdrop({ onClose }: { onClose: React.MouseEventHandler }) {
    return <div onClick={onClose}></div>;
}

interface ModalType {
    component: JSX.Element;
    props: object;
}
function Modal({ title, message, onConfirm }: ModalProps) {
    const [modal, setModal] = useState<ModalType | {}>({});
    // useEffect(()=> {
    //   ModalServcie.on('open', (({ component, props })) => {
    //     setModal({
    //       component
    //       props,
    //       close: () => {
    //         setModal({});
    //       }
    //     })
    //   })
    // },[]);

    // const ModalComponent = (modal as ModalType).component ? (modal as ModalType).component : null;

    // const ModalComponent: React.Component | null = (modal as ModalType)
    //     .component;
    // if (ModalComponent) {
    //     return (
    //         <ModalContainer>
    //             <ModalComponent
    //                 {...modal.props}
    //                 close={modal.close}
    //                 className="d-block"
    //             />
    //         </ModalContainer>
    //     );
    // } else {
    //     return <ModalContainer></ModalContainer>;
    // }
    return <div></div>;
}

export default Modal;

const ModalContainer = styled.div`
    border: 1px solid blue;
    width: 300px;
    height: 200px;
`;
