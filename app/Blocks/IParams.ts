/**
 * Block Params typing
 */

/**
 *  Source Params
 */
interface IParams {
    //name: string;
}

interface GranularParams extends IParams {
    playbackRate: number;
    detune: number;
    density: number;
    region: number;
    spread: number;
    grainlength: number;
    track: string|AudioBuffer;
    trackName: string;
    user: string;
    permalink: string;
}

interface ToneSourceParams extends IParams {
    //frequency: number; depreciated
    //baseFrequency: number; depreciated
    waveform: number|string;
    transpose: number;
    fine: number;
}

interface NoiseParams extends IParams {
    playbackRate: number;
    waveform: number;
}

interface SamplerParams extends IParams {
    playbackRate: number;
    detune: number;
    reverse: boolean;
    startPosition: number;
    endPosition: number;
    loop: boolean;
    loopStart: number;
    loopEnd: number;
    volume: number;
    track: string;
    trackName: string;
    permalink: string;
}

interface SampleGenParams extends IParams {
    playbackRate: number;
    detune: number;
    reverse: boolean;
    startPosition: number;
    endPosition: number;
    loop: boolean;
    loopStart: number;
    loopEnd: number;
    volume: number;
    generate: any;
    seed: any;
}

interface SoundcloudParams extends SamplerParams {
    trackName: string;
    user: string;
}

interface MicrophoneParams extends GainParams{
    monitor: boolean;
}

/**
 * Power Params
 */
interface LogicParams extends IParams {
    logic: boolean;
}

interface LaserParams extends IParams {
    angle: number;
    range: number;
    rotate: number;
    selfPoweredMode: boolean;
}

interface ParticleEmitterParams extends IParams {
    angle: number;
    speed: number;
    range: number;
    rate: number;
    selfPoweredMode: boolean;
}

interface PulseParams extends LogicParams {
    pulseLength: number;
}

/**
 * Interaction Params
 */
interface KeyboardParams extends IParams {
    transpose: number;
    glide: number;
    isPolyphonic: boolean;
}


/**
 * Post Effect Params
 */
interface AutoWahParams extends IParams {
    octaves: number;
    baseFrequency: number;
    mix: number;
    attack: number;
    release: number;
}

interface BitCrusherParams extends DryWetParams {
    bits: number;
}

interface ChorusParams extends RateDepthParams {
    delayTime: number;
    feedback: number;
}

interface ChompParams extends IParams {
    rate: number;
    Q: number;
    gain: number;
}

interface ChopperParams extends VibratoParams, DryWetParams {
    spread: number;
}

interface ConvolutionParams extends DryWetParams {
    track: string|AudioBuffer;
    trackName: string;
    user: string;
    permalink: string;
}

interface DelayParams extends DryWetParams {
    delayTime: number;
    feedback: number;
}

interface DistortionParams extends DryWetParams {
    drive: number;
}

interface DryWetParams  extends IParams {
    mix: number;
}

interface EQParams extends IParams {
    frequency_1: number;
    Q_1: number;
    gain_1: number;
    frequency_2: number;
    Q_2: number;
    gain_2: number;
    frequency_3: number;
    Q_3: number;
    gain_3: number;
    frequency_4: number;
    Q_4: number;
    gain_4: number;
}

interface FilterParams extends GainParams {
    frequency: number;
}

interface GainParams  extends IParams {
    gain: number;
}

interface PhaserParams extends DryWetParams, RateDepthParams {
    baseFrequency: number;
}

interface RateDepthParams extends IParams {
    rate: number;
    depth: number;
}

interface ReverbParams extends DryWetParams {
    dampening: number;
    roomSize: number;
}



/**
 * PreEffect Params
 */
interface EnvelopeParams extends IParams {
    attack: number;
    decay: number;
    sustain: number;
    release: number;
}

interface VibratoParams extends RateDepthParams {
    waveform: number;
}
interface ScuzzParams extends VibratoParams {}

interface PitchShifterParams extends IParams, DryWetParams {
    pitchOffset: number;
    windowSize: number;
}