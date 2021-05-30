class Machine extends React.Component {
    render() {
        const {symbol1, symbol2, symbol3} = this.props;
        const isWin = this.allSymbolsMatch(symbol1, symbol2, symbol3);
        const resultMessage = isWin ? "You Win!!!" : "Bad luck... better luck next time";
        const resultClass = isWin ? "win" : "lose";
        const symbolStyle = { fontSize: '50px', backgroundColor: "purple" };
        return (
            <div className="Machine">
                <p style={symbolStyle}>
                    {symbol1} {symbol2} {symbol3}
                </p>
                <p className={resultClass}>
                    {resultMessage}
                </p>
            </div>
        );
    }

    allSymbolsMatch(symbol1, symbol2, symbol3) {
        return (symbol1 === symbol2) && (symbol2 === symbol3);
    }
}