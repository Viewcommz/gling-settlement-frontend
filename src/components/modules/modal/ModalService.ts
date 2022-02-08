interface IProps {
    component: JSX.Element
    props : Record<string|number, string>
}
type CustomParams = {
    component : JSX.Element;
    props: object;
}
const ModalServcie = {
    on(eventName:any, callback:any) {
        callback();
        // (e:CustomEvent<CustomParams>) => void
        document.addEventListener(eventName, (e:CustomEvent) => callback(e.detail));
    },
    open(component:JSX.Element, props = {}) {
        document.dispatchEvent(new CustomEvent('open', { detail: { component, props }}));
    }
}

export default ModalServcie;