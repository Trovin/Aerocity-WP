export function whoIsThis(param) {
    if(typeof param === 'string') return 'selector';
    else if(param instanceof HTMLElement) return 'element';
    else if(param instanceof Node) return 'node';
    else if(param instanceof NodeList) return 'nodeList';
    return null;
}

export function checkParam(param) {
    if(!whoIsThis(param)) {
        dl.error('DomManipulate Error: this param is invalid use "string", "HTMLElement" or "Node"');
        return false;
    }
    return true;
}

export function getNode(param, type) {
    if(type === 'node' || type === 'element') return param;
    return document.querySelectorAll(param);
}

export function handleMethod(nodes, type, handler) {
    if(type === "element") handler(nodes);
    else if(type === "nodeList") nodes.forEach((node) => handler(node));
}

export function handleCheckMethod(nodes, type, behavior, handler) {
    if(type === "element") return handler(nodes);
    else if(type === "nodeList") {
        if(behavior === "some") return Object.keys(nodes).some(index => handler(nodes[index]));
        if(behavior === "every") return Object.keys(nodes).every(index => handler(nodes[index]));
    }
    return null;
}
