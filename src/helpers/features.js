import { beards, faces, glasses, hairs, hats } from "./body";

export const features = [
    {
        name: 'Skin',
        color: true,
        picker: true,
        items: [
            '#6e3d39',
            '#8c4b25',
            '#995c30',
            '#c7775c',
            '#e59c65',
            '#ffb79e',
            '#ffcba2',
            '#fee2d5',
        ]
    },
    {
        name: 'Face',
        color: false,
        picker: false,
        items: [
            faces.face_1,
            faces.face_2,
            faces.face_3
        ]
    },
    {
        name: 'Background',
        color: true,
        picker: true,
        items: [
            '#809bce',
            '#95b8d1',
            '#b8e0d2',
            '#d6eadf',
            '#eac4d5',
            '#f3f3f3',
        ]
    },
    {
        name: 'Clothes',
        color: true,
        picker: true,
        items: [
            '#d4afb9',
            '#d1cfe2',
            '#9cadce',
            '#7ec4cf',
            '#52b2cf',
            '#AAAAAA',
        ]
    },
    {
        name: 'Hair',
        color: false,
        picker: true,
        items: [
            hairs.hair_0,
            hairs.hair_1,
            hairs.hair_2,
            hairs.hair_3
        ]
    },
    {
        name: 'Glasses',
        color: false,
        picker: false,
        items: [
            glasses.glass_0,
            glasses.glass_1,
            glasses.glass_2,
            glasses.glass_3,
            glasses.glass_4,
            glasses.glass_5,
            glasses.glass_6,
            glasses.glass_7
        ]
    },
    // {
    //     name: 'Hats',
    //     color: false,
    //     picker: false,
    //     items: [
    //         hats.hat_0,
    //         hats.hat_1,
    //         hats.hat_2,
    //         hats.hat_3,
    //         hats.hat_4,
    //         hats.hat_5
    //     ]
    // },
    {
        name: 'Beards',
        color: false,
        picker: true,
        items: [
            beards.beard_0,
            beards.beard_1,
            beards.beard_2
        ]
    }
]