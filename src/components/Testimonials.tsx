'use client';

import { Quote, Star } from 'lucide-react';
import { motion } from '@/components/motion';

const testimonials = [
  {
    quote:
      'Dr. Jan Duffy made our move to Las Vegas completely stress-free. Her knowledge of the local market and personal attention to detail exceeded all our expectations.',
    author: 'Sarah M.',
    title: 'Corporate Executive',
    rating: 5,
  },
  {
    quote:
      'Moving from California to Las Vegas seemed daunting until we found Dr. Duffy. She handled everything from finding our perfect home to coordinating the entire move.',
    author: 'Michael R.',
    title: 'Tech Professional',
    rating: 5,
  },
  {
    quote:
      'The level of service and expertise Dr. Duffy provided was exceptional. She truly understands what families need when relocating to Las Vegas.',
    author: 'Jennifer L.',
    title: 'Military Family',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What Our Las Vegas Relocation Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what families and professionals who have
            relocated to Las Vegas with Dr. Jan Duffy have to say about their experience.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Quote Icon */}
              <div className="mb-6">
                <Quote className="w-8 h-8 text-blue-600 opacity-20" />
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-gray-700 leading-relaxed mb-6 italic text-lg">
                "{testimonial.quote}"
              </blockquote>

              {/* Author */}
              <div className="border-t border-gray-100 pt-4">
                <div className="font-semibold text-gray-900">— {testimonial.author}</div>
                <div className="text-sm text-gray-600">{testimonial.title}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Trust Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 max-w-4xl mx-auto border border-gray-100">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Join Hundreds of Satisfied Families
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Dr. Jan Duffy has successfully helped over 500 families relocate to Las Vegas with a
              98% satisfaction rate. Our clients consistently praise our attention to detail, local
              expertise, and personalized service.
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 text-gray-600">
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
                <span className="font-medium">98% Satisfaction Rate</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
                <span className="font-medium">500+ Families Relocated</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
                <span className="font-medium">35 Years in Las Vegas</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
