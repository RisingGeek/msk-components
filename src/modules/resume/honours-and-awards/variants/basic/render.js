import React from 'react'

const useStyles = (theme) => ({
    root: {
        padding: 20
    },
    headlineText: {
        margin: 0
    },
    honours: {
        margin: 5,
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 3,
        paddingBottom: 3,
        borderRadius: 20,
        fontSize: 15,
        display: 'inline-block'
    }
})

const Basic = (
    {
        theme,
        headlineText,
        honoursAwards
    }
) => {
    const styles = useStyles()
    return (
        <div style={styles.root}>
            <h1 style={styles.headlineText} >{headlineText.value}</h1>
            <hr />
            <br />
            <ul style={{ ...styles.honours }}>
                {
                    honoursAwards.value.map((honour, id) => (
                        <li key={id}>{honour.value}</li>
                    ))
                }
            </ul>

        </div >
    );
};

export default Basic;