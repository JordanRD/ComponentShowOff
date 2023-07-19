import React, { useState } from "react";
import { styled } from "styled-components";

const Container = styled.div`
    --background: #466277;

    --cloud: #d9d9d9;
    --day-sky-shade1: #08457e;
    --day-sky-shade2: #20578b;
    --day-sky-shade3: #366796;
    --day-sky-shade4: #4a76a0;
    --sun: #fdc500;
    --star: #ede2e2;
    --moon: #cbcbcb;
    --night-sky-shade1: #2d3135;
    --night-sky-shade2: #424549;
    --night-sky-shade3: #55575b;
    --night-sky-shade4: #66676b;

    height: 100vh;
    width: 100vw;
    background-color: var(--background);
    display: grid;
    place-items: center;
`;

const TextureContainer = styled.div`
    position: absolute;
    inset: 0;
    transition: all 500ms ease;
`;

const SwitchButton = styled.div<{ open: boolean }>`
    height: 8rem;
    width: 8rem;
    aspect-ratio: 1 / 1;
    border-radius: 100%;
    background-color: var(--sun);
    position: absolute;
    left: 1rem;
    top: 1rem;
    bottom: 1rem;
    z-index: 20;
    box-shadow: inset 0.25rem 0.25rem 0.25rem 0px rgba(255, 255, 0, 0.25),
        0.25rem 0.25rem 0.5rem 0px rgba(0, 0, 0, 0.5);
    transition: all 500ms ease;
    transform: translateX(0%);
    ${(p) =>
        p.open &&
        `
            transform:translateX(calc(200% - 1rem)) ;
            background-color: var(--moon);
            box-shadow: inset 0.25rem 0.25rem 0.5rem 0px rgba(0, 0, 0, 0.5),
            0.25rem 0.25rem 0.5rem 0px rgba(0, 0, 0, 0.5);
        `}
    ${TextureContainer} {
        ${(p) =>
            p.open
                ? `
        transform:rotateZ(0deg);
        `
                : `
        transform:rotateZ(-90deg);
        
        `}
    }
`;


const Texture = styled.div<{
    size: string;
    x: string;
    y: string;
    open: boolean;
}>(
    (p) => ({
        backgroundColor: "var(--night-sky-shade4)",
        width: p.size + "rem",
        height: p.size + "rem",
        borderRadius: "100%",
        left: p.x + "rem",
        position: "absolute",
        top: p.y + "rem",
        transition: "all 250ms ease ",
    }),
    (p) =>
        p.open
            ? {
                  opacity: 1,
                  transform: "scale(1)",
              }
            : { opacity: 0, transform: "scale(0)" }
);

const CloudContainer = styled.div<{ open: boolean }>`
    position: absolute;
    z-index: 10;
    right: -1rem;
    bottom: 0;
    /* top:2rem; */
    left: 0;
    display: flex;
    align-items: flex-end;
    transform: translateY(5rem) translateX(2rem);
    transition: all 250ms ease 500ms;
    overflow: visible;
    ${(p) =>
        p.open &&
        ` 
            transition: all 250ms ease 0ms;
            transform:translateY(100%);
        `}
`;

const SecondaryCloudContainer = styled(CloudContainer)<{ open: boolean }>`
    transform: translateY(4rem) translateX(2rem);
    opacity: 0.75;
    ${(p) =>
        p.open &&
        `
            transform:translateY(100%) translateX(1.5rem);
        `}
`;

const SwitchContainer = styled.div<{ open: boolean }>`
    width: 25rem;
    height: 10rem;
    border-radius: 10rem;
    overflow: hidden;
    border: 0.5rem solid #fff;
    position: relative;
    box-shadow: inset -1rem -1rem 1rem 1rem rgba(0, 0, 0, 0.25);
    overflow: hidden;
    cursor: pointer;
`;

const BaseShade = styled.div<{ open: boolean }>`
    box-sizing: border-box;
    /* width: 100%; */
    /* height: 100%; */
    /* padding-right: 3.5rem; */
    position: absolute;
    /* left: 0; */
    top: 0;
    bottom: 0;
    transition-duration: 500ms;
    transition-property: all;
    transition-timing-function: ease;
    ${(p) =>
        p.open
            ? `
        border-top-left-radius: 5rem;
        border-bottom-left-radius: 5rem;
        `
            : `
    border-top-right-radius: 5rem;
    border-bottom-right-radius: 5rem;
    `}
`;

const SwitchShade1 = styled(BaseShade)<{ open: boolean }>`
    background-color: var(--${(p) => (p.open ? "night" : "day")}-sky-shade1);
    z-index: 1;
    left: 0;
    right: 0;
`;
const SwitchShade2 = styled(BaseShade)<{ open: boolean }>`
    background-color: var(--${(p) => (p.open ? "night" : "day")}-sky-shade2);
    ${(p) =>
        p.open
            ? `
    right:0rem;
    left:2.5rem;
    `
            : `
    left:0rem;
    right:2.5rem;
    `};
    z-index: 2;
`;
const SwitchShade3 = styled(BaseShade)<{ open: boolean }>`
    background-color: var(--${(p) => (p.open ? "night" : "day")}-sky-shade3);
    z-index: 3;
    ${(p) =>
        p.open
            ? `
    right:0rem;
    left:5rem;
    `
            : `
    left:0rem;
    right:5rem;
    `};
`;
const SwitchShade4 = styled(BaseShade)<{ open: boolean }>`
    background-color: var(--${(p) => (p.open ? "night" : "day")}-sky-shade4);
    z-index: 4;
    ${(p) =>
        p.open
            ? `
    right:0rem;
    left:7.5rem;
    `
            : `
    left:0rem;
    right:7.5rem;
    `};
`;

const Star = styled(BaseStar)<{ x: string; y: string }>`
    position: absolute;

    left: ${(p) => p.x + "rem"};
    top: ${(p) => p.y + "rem"};
`;

const Stars = styled.div<{ open: boolean }>`
    position: absolute;
    top: 0;
    left: 2rem;
    bottom: 0;
    display: grid;
    place-items: center;
    z-index: 10;
    ${Star} {
        ${(p) =>
            p.open
                ? `
        transform:rotateZ(0deg) scale(1);
        transition: all 250ms ease 500ms;
        `
                : `
        transform:rotateZ(90deg) scale(0);
        transition: all 250ms ease 0ms;
        `}
    }
`;
// const Cloud = styled.div`
//     height: 5rem;
//     width: 5rem;
//     background-color: var(--cloud);
//     z-index: 10;
//     border-radius: 100%;
//     /* position: absolute;
//     right: 0rem;
//     bottom: 0rem; */
// `;

function Switch() {
    const [open, setOpen] = useState(false);
    return (
        <Container>
            <SwitchContainer onClick={() => setOpen((p) => !p)} open={open}>
                <SwitchShade1 open={open} />
                <SwitchShade2 open={open} />
                <SwitchShade3 open={open} />
                <SwitchShade4 open={open} />
                <SecondaryCloudContainer open={open}>
                    <Clouds />
                </SecondaryCloudContainer>
                <CloudContainer open={open}>
                    <Clouds />
                </CloudContainer>
                <Stars open={open}>
                    <Star x="4" y="7" size="0.5rem" />
                    <Star x="8" y="5" size="2rem" />
                    <Star x="3" y="2" size="0.5rem" />
                    <Star x="1" y="5" size="1rem" />
                    <Star x="6" y="3" size="1rem" />
                </Stars>
                <SwitchButton open={open}>
                    <TextureContainer>
                        <Texture open={open} size="1" x="5" y="2" />
                        <Texture open={open} size="2" x="1" y="2" />
                        <Texture open={open} size="3" x="3" y="4" />
                    </TextureContainer>
                </SwitchButton>
            </SwitchContainer>
        </Container>
    );
}

export default Switch;

function BaseStar({
    size = "100%",
    className,
}: {
    size: string;
    className?: string;
}) {
    return (
        <svg
            className={className}
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 200 200"
        >
            <polygon
                points="0,100 75,75 100,0 125,75 200,100 125,125 100,200 75,125"
                style={{ fill: "var(--star)" }}
            />
        </svg>
    );
}

function Clouds() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            viewBox="0 0 600 300"
            // style={{ boxShadow: "1rem 1rem 1rem 1rem black" }}
        >
            <Cloud transform="0 118" />
            <Cloud transform="82 100" />
            <Cloud transform="158 118" />
            <Cloud transform="227 100" />
            <Cloud transform="308 118" />
            <Cloud transform="384 118" />
            <Cloud transform="420 62" />
            <Cloud transform="466" />
            <Cloud transform="500" />
        </svg>
    );
}

function Cloud({ transform }: { transform: string }) {
    return (
        <circle
            cx="60"
            cy="60"
            r="60"
            transform={`translate(${transform})`}
            fill="var(--cloud)"
        />
    );
}
