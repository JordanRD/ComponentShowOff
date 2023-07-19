import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
    height: 100vh;
    width: 100vw;
    display: grid;
    padding: 1rem;
    /* place-items: center; */
    .circle-container {
        height: 10vmin;
        width: 10vmin;
        display: grid;
        place-items: center;
        position: relative;
    }
    .core-circle {
        height: 10vmin;
        width: 10vmin;
        border-radius: 100%;
        background-color: #157979;
        display: grid;
        place-items: center;
        position: relative;
        z-index: 5;
    }
`;

const getAngle = (total: number, n: number, offset: number) => {
    return offset + (160 / total) * n;
};

const Rotary = styled.div<{
    count: number;
    n: number;
    open: boolean;
    selected: boolean;
}>`
    /* background: #ffffc7; */
    transform-origin: 2.5vmin center;
    position: absolute;
    left: 2.5vmin;
    top: 2.5vmin;
    width: 15vmin;
    display: flex;
    /* flex-direction: column; */
    justify-content: flex-end;
    opacity: ${(p) => (p.open ? 1 : 0)};
    transition: all 250ms ease ${(p) => `${p.n * 62.5}ms`};
    z-index: 1;
    transform: rotateZ(${(p) => `${getAngle(p.count, p.n, -15)}`}deg)
        translateX(${(p) => (p.open ? "0vmin" : "-12.5vmin")});
    .circle-inside {
        transform: rotateZ(${(p) => `${-getAngle(p.count, p.n, -15)}`}deg);
        border-width: 2px;
        border-style: solid;
        border-color: ${(p) => (p.selected ? "red" : "transparent")};
        height: 5vmin;
        width: 5vmin;
        border-radius: 100%;
        background: pink;
        color: black;
        font-weight: bold;
        display: grid;
        place-items: center;
        transition: all 250ms ease;
    }
`;

const arr = Array.from({ length: 4 }, (_, i) => i);
function rotation() {
    // useEffect(() => {
    //     setInterval(() => {

    //     }, 2500);
    // }, []);
    const [open, setOpen] = useState(true);
    const [selected, setSelected] = useState(0);
    return (
        <Container>
            <div className="circle-container">
                <div
                    onClick={() => {
                        setOpen((p) => !p);
                        setSelected(0);
                    }}
                    className="core-circle"
                >
                    <h5>1</h5>
                </div>
                {arr.map((i) => {
                    return (
                        <Rotary
                            open={open}
                            n={i}
                            count={arr.length}
                            selected={i + 1 === selected}
                            onClick={() => setSelected(i + 1)}
                            key={i + 1}
                            className="circle-rotary"
                        >
                            <div className="circle-inside">{i + 1}</div>
                        </Rotary>
                    );
                })}
            </div>
        </Container>
    );
}

export default rotation;
