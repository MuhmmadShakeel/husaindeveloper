import exclusivity from '../../assets/images/exclusivity/exclusivity.webp'
import SectionHeading from './SectionHeading'

const features = [
  '6 kanal Grand Mosque',
  'Bahawalpur Biggest Housing Scheme',
  '25 kanal central park',
  '100 feet main boulevard',
  'Gold Class Cinema',
  'International level school',
  'Cash & Carry Super Market',
  'Hospital',
  'Bank',
  'Mini Zoo',
  '24/7 CCTV Surveillance',
]

function ExclusivitySection() {
  return (
    <section className="exclusivity-section" id="facilities">
      <div className="page-width exclusivity-section__inner">
        <div className="exclusivity-section__heading" data-aos="fade-up">
          <SectionHeading
            eyebrow="Everything within reach"
            title={<>Everyday essentials. <em>Exceptional living.</em></>}
            copy="A complete community is more than an address. It is the confidence that everything you value is close to home."
            align="center"
          />
        </div>

        <div className="exclusivity-section__grid">
          <div className="exclusivity-section__visual" data-aos="fade-right">
            <img src={exclusivity} alt="Entrance to an exclusive Hussain Developers community" />
            <div className="exclusivity-section__tag"><span>11</span> Community essentials</div>
          </div>

          <div className="exclusivity-section__list" data-aos="fade-left">
            <p className="eyebrow">Designed for complete living</p>
            {features.map((feature, index) => (
              <div
                className="exclusivity-feature"
                key={feature}
                data-aos="fade-up"
                data-aos-delay={(index % 6) * 45}
              >
                <span>{String(index + 1).padStart(2, '0')}</span>
                <p>{feature}</p>
                <i aria-hidden="true">↗</i>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ExclusivitySection
