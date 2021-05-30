class Machine extends React.Component {
    render() {
        const {symbol1, symbol2, symbol3} = this.props;
        const isWin = this.allSymbolsMatch(symbol1, symbol2, symbol3);
        const resultMessage = isWin ? "You Win!!!" : "Bad luck... better luck next time";
        return (
            <div>
                <p>
                    {symbol1} {symbol2} {symbol3}
                </p>
                <p>
                    {resultMessage}
                </p>
            </div>
        );
    }

    allSymbolsMatch(symbol1, symbol2, symbol3) {
        return (symbol1 === symbol2) && (symbol2 === symbol3);
    }
}