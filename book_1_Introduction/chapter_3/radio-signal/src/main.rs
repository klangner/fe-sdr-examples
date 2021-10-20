use futuresdr::anyhow::Result;
use futuresdr::blocks::{WebsocketSinkBuilder, WebsocketSinkMode};
use futuresdr::blocks::audio::Oscillator;
use futuresdr::blocks::audio::AudioSink;
use futuresdr::blocks::FftBuilder;
use futuresdr::runtime::Flowgraph;
use futuresdr::runtime::Runtime;


fn main() -> Result<()> {
    let mut fg = Flowgraph::new();

    let src = Oscillator::new(440, 0.1);
    let fft = FftBuilder::new().build();
    // let audio_snk = AudioSink::new(48_000, 1);
    let snk = WebsocketSinkBuilder::<f32>::new(9001)
        .mode(WebsocketSinkMode::FixedDropping(2048))
        .build();

    let src = fg.add_block(src);
    let fft = fg.add_block(fft);
    let snk = fg.add_block(snk);
    // let audio_snk = fg.add_block(audio_snk);

    // fg.connect_stream(src, "out", audio_snk, "in")?;
    fg.connect_stream(src, "out", fft, "in")?;
    fg.connect_stream(fft, "out", snk, "in")?;

    Runtime::new().run(fg)?;

    Ok(())
}