class App extends React.Component {
    render() {
        return (
            <div>
                <Hello 
                    to="Ringo" 
                    from="Paul" 
                    bangs={4}
                    img="https://media.giphy.com/media/l0Nwt1KYfaW2aEdSo/giphy.gif"
                />
                <Hello 
                    to="John" 
                    img="https://media.giphy.com/media/l0Nwt1KYfaW2aEdSo/giphy.gif"
                />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));