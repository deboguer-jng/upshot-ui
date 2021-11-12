import React, { useState, useMemo } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import TreeMap from './'

export default {
  title: '@UI/TreeMap',
  component: TreeMap,
} as ComponentMeta<typeof TreeMap>

const Template: ComponentStory<typeof TreeMap> = (args) => <TreeMap {...args} />

export const Main = Template.bind({})
Main.args = {
  data: [
    {
      name: 'Hashmasks',
      delta: 0.023,
      marketCap: 316459.6956185923,
    },
    {
      name: 'Pudgy Penguins',
      delta: 0.057,
      marketCap: 39997.67684864839,
    },
    {
      name: 'CryptoPunks',
      delta: 0.843,
      marketCap: 551546.9625465479,
    },
    {
      name: 'KnownOrigin',
      delta: 1.529,
      marketCap: 8428.419960002486,
    },
    {
      name: 'Rarible',
      delta: 0.154,
      marketCap: 32540.192028002362,
    },
    {
      name: 'MakersPlace',
      delta: 1.588,
      marketCap: 12852.481550070837,
    },
    {
      name: 'Bored Ape Yacht Club',
      delta: 0.601,
      marketCap: 187745.8104708365,
    },
    {
      name: 'Meme Ltd.',
      delta: -0.015,
      marketCap: 24688.548758688517,
    },
    {
      name: 'SuperRare',
      delta: 0.076,
      marketCap: 50024.59392430251,
    },
    {
      name: 'JOYWORLD JOYs',
      delta: 6.097,
      marketCap: 1714.2021810789981,
    },
    {
      name: 'SOLOS',
      delta: 1.293,
      marketCap: 194.75559957727998,
    },
    {
      name: 'PolkaPets TCG',
      delta: 31.581,
      marketCap: 70184.61274374634,
    },
    {
      name: 'Meebits',
      delta: 0.188,
      marketCap: 73498.04441072735,
    },
    {
      name: 'Loot (for Adventurers)',
      delta: -0.045,
      marketCap: 69508.58259729073,
    },
    {
      name: 'Dynamic Slices',
      delta: 1.554,
      marketCap: 1683.3291506658495,
    },
    {
      name: 'Skulptuur by Piter Pasma',
      delta: -4.808,
      marketCap: 109.3,
    },
    {
      name: 'Singularity',
      delta: -2.252,
      marketCap: 4261.115640048572,
    },
    {
      name: 'Rapture',
      delta: -0.451,
      marketCap: 3031.3352,
    },
    {
      name: 'High Tide',
      delta: -0.298,
      marketCap: 59.3973,
    },
    {
      name: 'Phototaxis',
      delta: -0.143,
      marketCap: 710.6301199589323,
    },
    {
      name: 'We',
      delta: 3.291,
      marketCap: 14.613,
    },
    {
      name: 'Blaschke Ballet',
      delta: -2.344,
      marketCap: 35.6825,
    },
    {
      name: 'Blaschke Ballet by NumbersInMotion',
      delta: 211.685,
      marketCap: 2.802,
    },
    {
      name: 'Construction Token',
      delta: 0.709,
      marketCap: 1726.8372,
    },
    {
      name: 'Art Blocks Curated',
      delta: -0.333,
      marketCap: 7852.8960093137875,
    },
    {
      name: 'Chromie Squiggle',
      delta: 0.004,
      marketCap: 32555.655734500884,
    },
    {
      name: 'NimBuds',
      delta: 1.303,
      marketCap: 954.3351,
    },
    {
      name: 'Spectron',
      delta: 0.378,
      marketCap: 1368.1419,
    },
    {
      name: 'EnergySculpture',
      delta: 0.316,
      marketCap: 398.13921260676113,
    },
    {
      name: 'Empyrean',
      delta: 0.095,
      marketCap: 117.2888,
    },
    {
      name: 'Origami Dream',
      delta: -3.403,
      marketCap: 73.8019,
    },
    {
      name: 'Asterisms',
      delta: 34.104,
      marketCap: 168.93,
    },
    {
      name: 'Watercolor Dreams',
      delta: -0.239,
      marketCap: 1890.0052,
    },
    {
      name: 'Patchwork Saguaros',
      delta: 344.379,
      marketCap: 140.3723,
    },
    {
      name: 'dino pals',
      delta: -0.509,
      marketCap: 2477.834785,
    },
    {
      name: 'Breathe You',
      delta: -0.257,
      marketCap: 156.17680000000001,
    },
    {
      name: 'Libertad Parametrizada',
      delta: 0.638,
      marketCap: 274.4067,
    },
    {
      name: 'sail-o-bots',
      delta: 0.473,
      marketCap: 5192.9678732544835,
    },
    {
      name: 'Genesis',
      delta: 0.375,
      marketCap: 2059.0582,
    },
    {
      name: 'Cryptoblots',
      delta: -0.035,
      marketCap: 1910.0579916563229,
    },
    {
      name: 'View Card',
      delta: 43.68,
      marketCap: 190.579,
    },
    {
      name: 'Variant Plan',
      delta: 2.769,
      marketCap: 137.703525,
    },
    {
      name: 'Ignition',
      delta: 0.438,
      marketCap: 1090.9865,
    },
    {
      name: 'HyperHash',
      delta: 0.011,
      marketCap: 2549.9771,
    },
    {
      name: 'Ringers',
      delta: 0.358,
      marketCap: 20239.7428145,
    },
    {
      name: 'Cyber Cities',
      delta: 0.387,
      marketCap: 248.7409,
    },
    {
      name: 'Utopia',
      delta: -2.944,
      marketCap: 224.448,
    },
    {
      name: 'Sentience',
      delta: -2.973,
      marketCap: 253.4109,
    },
    {
      name: '27-Bit Digital',
      delta: 0.056,
      marketCap: 1154.52678495,
    },
    {
      name: 'Pixel Glass',
      delta: -0.604,
      marketCap: 133.815,
    },
    {
      name: 'R3sonance',
      delta: -0.019,
      marketCap: 748.8558,
    },
    {
      name: '720 Minutes',
      delta: -0.139,
      marketCap: 2553.432,
    },
    {
      name: 'Inspirals',
      delta: -0.246,
      marketCap: 1878.0233605663382,
    },
    {
      name: 'Hieroglyphs',
      delta: 0.233,
      marketCap: 400.496,
    },
    {
      name: 'Light Beams',
      delta: 1.434,
      marketCap: 473.6825,
    },
    {
      name: 'Aerial View',
      delta: -0.691,
      marketCap: 1765.7248,
    },
    {
      name: '70s Pop Series One',
      delta: -3.125,
      marketCap: 144.7738,
    },
    {
      name: 'Elevated Deconstructions',
      delta: -2.344,
      marketCap: 3109.8569,
    },
    {
      name: 'Color Study',
      delta: 0.094,
      marketCap: 749.0961,
    },
    {
      name: 'Archetype',
      delta: -0.541,
      marketCap: 9929.806544887579,
    },
    {
      name: 'Ensō',
      delta: -0.977,
      marketCap: 217.3337,
    },
    {
      name: 'Synapses',
      delta: -0.433,
      marketCap: 1667.2117067975284,
    },
    {
      name: 'Gen 3',
      delta: -0.288,
      marketCap: 210.0162,
    },
    {
      name: 'Rhythm',
      delta: -0.075,
      marketCap: 312.6039,
    },
    {
      name: 'Bubble Blobby',
      delta: -0.362,
      marketCap: 1142.4904,
    },
    {
      name: 'CatBlocks',
      delta: -0.649,
      marketCap: 1029.917062615215,
    },
    {
      name: 'Incantation',
      delta: 1.763,
      marketCap: 145.3047,
    },
    {
      name: 'planets',
      delta: -0.656,
      marketCap: 159.3921,
    },
    {
      name: 'Gravity 12',
      delta: -0.455,
      marketCap: 557.1466181818182,
    },
    {
      name: 'Divisions',
      delta: -1.9,
      marketCap: 1243.0107,
    },
    {
      name: 'glitch crystal monsters',
      delta: -0.545,
      marketCap: 2511.1535,
    },
    {
      name: 'Nucleus',
      delta: -1.089,
      marketCap: 438.0643,
    },
    {
      name: 'Pigments',
      delta: -0.348,
      marketCap: 7515.059554574802,
    },
    {
      name: 'Wave Schematics',
      delta: -1.159,
      marketCap: 1117.8182,
    },
    {
      name: 'phase',
      delta: -0.512,
      marketCap: 8124.067833724947,
    },
    {
      name: 'Unigrids',
      delta: 2.06,
      marketCap: 3115.30055,
    },
    {
      name: 'The Eternal Pump',
      delta: 15.117,
      marketCap: 3646.19,
    },
    {
      name: 'Apparitions',
      delta: -0.292,
      marketCap: 2815.596196,
    },
    {
      name: 'Paper Armada',
      delta: 0.007,
      marketCap: 1733.1046169234062,
    },
    {
      name: 'Algobots',
      delta: 0.103,
      marketCap: 1847.3737,
    },
    {
      name: 'Subscapes',
      delta: -0.164,
      marketCap: 6002.8684,
    },
    {
      name: 'The Opera',
      delta: -1.102,
      marketCap: 338.4947,
    },
    {
      name: 'Abstraction',
      delta: -0.242,
      marketCap: 199.3286,
    },
    {
      name: 'Return',
      delta: 19.164,
      marketCap: 836.0206336,
    },
    {
      name: 'Panelscape 🅰🅱',
      delta: -0.348,
      marketCap: 222.0507,
    },
    {
      name: 'Hashtractors',
      delta: 1.279,
      marketCap: 424.7275,
    },
    {
      name: 'Enchiridion',
      delta: -0.317,
      marketCap: 351.408,
    },
    {
      name: 'Speckled Summits',
      delta: 1.24,
      marketCap: 390.781,
    },
    {
      name: 'Endless Nameless',
      delta: -0.087,
      marketCap: 1750.5584136843258,
    },
    {
      name: 'The Liths of Sisyphus',
      delta: -2.076,
      marketCap: 481.31319,
    },
    {
      name: 'Alien Insects',
      delta: -0.374,
      marketCap: 4215.2796,
    },
    {
      name: 'PrimiLife',
      delta: -1.205,
      marketCap: 141.8845,
    },
    {
      name: 'Gen 2',
      delta: 0.376,
      marketCap: 328.2207,
    },
    {
      name: 'Pathfinders',
      delta: -0.383,
      marketCap: 692.56745356,
    },
    {
      name: 'Galaxiss',
      delta: -1.891,
      marketCap: 276.7107,
    },
    {
      name: 'Elementals',
      delta: 0.147,
      marketCap: 1276.8660725,
    },
    {
      name: 'Stipple Sunsets',
      delta: -0.096,
      marketCap: 240.407,
    },
    {
      name: 'Talking Blocks',
      delta: -0.073,
      marketCap: 118.3335,
    },
    {
      name: 'AlgoRhythms',
      delta: -0.613,
      marketCap: 2657.4157,
    },
    {
      name: 'Antennas',
      delta: -1.23,
      marketCap: 245.9822,
    },
  ],
  onCollectionSelected: (collection: number) => {
    console.log({ collection })
  },
}

export const Error = Template.bind({})
Error.args = {
  error: true,
}

export const Loading = Template.bind({})
Loading.args = {
  loading: true,
}
