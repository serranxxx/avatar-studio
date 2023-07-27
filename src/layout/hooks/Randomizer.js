import { beards, faces, glasses, hairs, hats } from "./body_parts";



export const RandomFace = (index) => {
    switch (index) {
        case 1: return faces.face_1
        case 2: return faces.face_2
        case 3: return faces.face_3
        default:
            break;
    }
}

export const RandomSkin = (index) => {
    switch (index) {
        case 1: return '#6e3d39'
        case 2: return '#8c4b25'
        case 3: return '#995c30'
        case 4: return '#c7775c'
        case 5: return '#e59c65'
        case 6: return '#ffb79e'
        case 7: return '#ffcba2'
        case 8: return '#fee2d5'
        default:
            break;
    }
}

export const RandomHair = (index) => {
    switch (index) {
        case 1: return hairs.hair_0
        case 2: return hairs.hair_1
        case 3: return hairs.hair_2
        case 4: return hairs.hair_3
        default:
            break;
    }
}

export const RandomGlasses = (index) => {
    switch (index) {
        case 1: return glasses.glass_0
        case 2: return glasses.glass_1
        case 3: return glasses.glass_2
        case 4: return glasses.glass_3
        case 5: return glasses.glass_4
        case 6: return glasses.glass_5
        case 7: return glasses.glass_6
        case 8: return glasses.glass_7
        default:
            break;
    }
}

export const RandomMoustache = (index) => {
    switch (index) {
        case 1: return beards.beard_0
        case 2: return beards.beard_1
        case 3: return beards.beard_0
        case 4: return beards.beard_2
        case 5: return beards.beard_0
        default:
            break;
    }
}

export const RandomHats = (index) => {
    switch (index) {
        case 1: return hats.hat_0
        case 2: return hats.hat_1
        case 3: return hats.hat_2
        case 4: return hats.hat_3
        case 5: return hats.hat_4
        case 6: return hats.hat_5
        case 7: return hats.hat_0
        default:
            break;
    }
}

export const RandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}