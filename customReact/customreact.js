// for rendering the reactElement i mean how to render function or method

function customRender(reactElement,container){
    // through reactElements im setting the pros and element
 const domElement=document.createElement(reactElement.type)
 domElement.innerHTML=reactElement.children
/* rather thna repeatitly writin gset Attribute we can go for for loop
 domElement.setAttribute('href', reactElement.props.href)
 domElement.setAttribute('target', reactElement.props.target)
*/

for (const prop in reactElement.props) {
//   if children is inside the props then ignore it
if(prop === 'children') continue;
domElement.setAttribute(prop, reactElement.props[prop])
}

 container.appendChild(domElement)
}

// lets suppose we want to render a tag 
// behind the scene how it is renderd

// react try to create elements in tree(like DOM)
const reactElement={
    type:'a',
    props:{
        href:'https://google.com',
        target:'_blank'
    },
    children:'Click me to visit Google'
}


const maincontainer= document.getElementById('root');
// grabing the root 
// or querySelector('#root')

// to render the reactElement into the root elements
//(function) it expect what, where to inject this
customRender(reactElement,maincontainer)


