
import ReactReconciler from 'react-reconciler';

const rootHostContext = {};
const childHostContext = {};

const hostConfig = {
  getRootHostContext () {
    return rootHostContext;
  },
  getChildHostContext () {
    return childHostContext;
  },
  shouldSetTextContent (type, props) {
    return typeof props.children === 'string' || typeof props.children === 'number';
  },
  prepareForCommit () {},
  resetAfterCommit () {},
  createInstance: (type, newProps, rootContainerInstance, _currentHostContext, workInProgress) => {
    const domElement = document.createElement(type);
    Object.keys(newProps).forEach(propName => {
      const propValue = newProps[propName];
      if (propName === 'children') {
        if (typeof propValue === 'string' || typeof propValue === 'number') {
          domElement.textContent = propValue;
        }
      } else if (propName === 'onClick') {
        domElement.addEventListener('click', propValue);
      } else if (propName === 'className') {
        domElement.setAttribute('class', propValue);
      } else {
        const propValue = newProps[propName];
        domElement.setAttribute(propName, propValue);
      }
    });
    return domElement;
  },
  supportsMutation: true,
  finalizeInitialChildren () {},
  appendInitialChild: (parent, child) => {
    parent.appendChild(child);
  },
  appendChildToContainer: (parent, child) => {
    parent.appendChild(child);
  },
  removeChildFromContainer: (parent, child) => {
    child.remove();
  },
  prepareUpdate(domElement, oldProps, newProps) {
    return true;
  },
  insertBefore(parent, stateNode, before) {
    before.before(stateNode);
  },
  removeChild(parent, node) {
    node.remove();
  },
  commitUpdate(domElement, updatePayload, type, oldProps, newProps) {
    Object.keys(newProps).forEach(propName => {
      const propValue = newProps[propName];
      if (propName === 'children') {
        if (typeof propValue === 'string' || typeof propValue === 'number') {
          domElement.textContent = propValue;
        }
      } else {
        const propValue = newProps[propName];
        domElement.setAttribute(propName, propValue);
      }
    });
  }
};


const ReactReconcilerInst = ReactReconciler(hostConfig);
export default {
  render: (reactElement, domElement, callback) => {
    // Create a root Container if it doesnt exist
    if (!domElement._rootContainer) {
      domElement._rootContainer = ReactReconcilerInst.createContainer(domElement, false, false);
    }

    // update the root Container
    return ReactReconcilerInst.updateContainer(reactElement, domElement._rootContainer, null, callback);
  }
};