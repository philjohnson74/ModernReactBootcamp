class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Slot Machine - 3 Credits</h1>
                <Machine 
                    symbol1="🍊" 
                    symbol2="🍇"
                    symbol3="🍋"
                />
                <Machine 
                    symbol1="🍇" 
                    symbol2="🍇"
                    symbol3="🍇"
                />
                <Machine 
                    symbol1="🍋" 
                    symbol2="🍊"
                    symbol3="🍊"
                />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));