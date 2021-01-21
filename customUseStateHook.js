function Counter(){
        const [ count, setCounter ] = MyReact.useState(0);
        return {
            click: ()=> setCounter(count+1),
            render:()=> console.log('count is>>>',count)
        }
}

const MyReact = (function(){
    let _val = 0;
    return {
        render(Comp){
            const Component = Comp();
            Component.render();
            return Component;
        },
        useState(initialValue){
            _val = _val || initialValue;
            function setValue(val){
                _val = val;
            }
            return [_val, setValue];
        }
    }
})()

let App = MyReact.render(Counter);
App.click();
App = MyReact.render(Counter)
App.click();
App = MyReact.render(Counter)
