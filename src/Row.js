import styled from "@emotion/styled"

//从props取值
export default styled('div')`
    display: block;
    box-sizing: border-box;
    flex: 1 0 0;
    min-width: 0;
    color:red;
    margin-top:15px;
    justify-content: ${(props) => (props.between ? "space-between" : undefined)};
    margin-bottom: ${(props) =>props.marginBottom ? props.marginBottom + "px" : undefined};
    > * {
        margin-top: 0 !important;
        margin-bottom: 0 !important;
        margin-right: ${(props) =>
            typeof props.gap === "number"
                ? props.gap + "rem"
                : props.gap
                ? "2rem"
                : undefined
            };
        }

`