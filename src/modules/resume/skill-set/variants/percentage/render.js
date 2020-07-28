import React from 'react'

const useStyles = (theme) => ({
    root: {
        padding: 20
    },
    headlineText: {
        margin: 0
    },
    skill: {
        paddingRight: 10,
        paddingTop: 3,
        paddingBottom: 3,
        fontSize: 15,
        display: 'inline-block',
        borderRight: `1px solid ${theme.value.contrast}`,
        textAlign: 'right',
        width: '20%'
    },
    flexBox: {
        display: 'flex',
        alignItems: 'center'
    },
    bar: {
        width: '70%'
    },
    barLen: {
        backgroundColor: theme.value.color,
        height: 10,
        marginRight: 5,
        display: 'inline-block'
    },
    percent: {
        width: '10%',
        marginLeft: 5
    }
})

const Basic = (
    {
        theme,
        headlineText,
        skills
    }
) => {
    const styles = useStyles(theme);
    return (
        <div style={styles.root}>
            <h1 style={styles.headlineText} >{headlineText.value}</h1>
            <hr />
            <br />
            <div>
                {
                    skills.value.map((skill) => {
                        return <div key={skill.value} style={styles.flexBox}>
                            <div style={styles.skill}>{skill.value}</div>
                            <div style={styles.bar}>
                                <div style={{ ...styles.barLen, width: skill.percentage.value + '%' }}></div>
                                {skill.percentage.value < 80 && skill.percentage.value+'%'}
                            </div>
                            <div style={{ ...styles.percent, color: theme.value.contrast }}>
                                {skill.percentage.value >= 80 && skill.percentage.value+'%'}
                            </div>
                        </div>
                    })
                }
            </div>

        </div >
    );
};

export default Basic;