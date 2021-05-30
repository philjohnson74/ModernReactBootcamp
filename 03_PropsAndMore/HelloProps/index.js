class App extends React.Component {
    render() {
        return (
            <div>
                <Hello 
                    to="Ringo" 
                    from="Paul" 
                    bangs={4}
                    img="https://media.giphy.com/media/l0Nwt1KYfaW2aEdSo/giphy.gif"
                    data={[1, 2, 3, 4, 5]}
                />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));