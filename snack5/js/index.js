
function customAppend (parent, child) {
    const newElement = document.createElement(child); 
    parent.append(newElement);
}

const wrapper = document.getElementById("wrapper");
customAppend(wrapper, "h1");