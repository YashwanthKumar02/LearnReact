function customRender(reactElement, container){
    // const domElement = document.createElement(reactElement.type)
    // domElement.href = reactElement.props.href
    // domElement.target = reactElement.props.target
    // domElement.innerHTML = reactElement.children
    // container.appendChild(domElement)

    const domElement = document.createElement(reactElement.type)
    domElement.innerText = reactElement.children
    for(const prop in reactElement.props){
        if(prop === 'children') continue
        domElement.setAttribute(prop, reactElement.props[prop])
    }
    container.appendChild(domElement)
}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://www.google.com',
        target: '_blank'
    },
    children: 'Click me to visit google'
}

const mainContainer = document.querySelector('#root')

customRender(reactElement, mainContainer)