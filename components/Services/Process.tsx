'use client'
import { useEffect, useRef, useState, ReactNode } from 'react';
import { ClipboardList, Calendar, CheckCircle2 } from 'lucide-react';

interface ScrollStackItemProps {
  children: ReactNode;
  index: number;
  logo?: ReactNode;
}

const ScrollStackItem: React.FC<ScrollStackItemProps> = ({ children, index, logo }) => {
  const [isStuck, setIsStuck] = useState<boolean>(false);
  const itemRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsStuck(!entry.isIntersecting && entry.boundingClientRect.top < 0);
      },
      { threshold: [0, 1], rootMargin: '-1px 0px 0px 0px' }
    );

    const el = itemRef.current;
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={itemRef}
      className="sticky transition-all duration-500 ease-out"
      style={{
        top: `${index * 2}rem`,
        zIndex: index,
      }}
    >
      <div
        className={`min-h-screen flex items-center justify-center p-8 transition-all duration-700 ${
          isStuck ? 'scale-95 opacity-70' : 'scale-100 opacity-100'
        }`}
      >
        <div className="bg-white rounded-2xl shadow-2xl p-12 max-w-2xl w-full transform transition-all duration-500 hover:shadow-3xl text-center">
          {logo && (
            <div className="flex justify-center mb-6">
              <div className="bg-slate-100 p-4 rounded-full shadow-md">
                {logo}
              </div>
            </div>
          )}
          {children}
        </div>
      </div>
    </div>
  );
};

interface ScrollStackProps {
  children: ReactNode;
}

const ScrollStack: React.FC<ScrollStackProps> = ({ children }) => (
  <div className="relative bg-gradient-to-b from-slate-50 to-slate-100 min-h-[300vh]">
    {children}
  </div>
);

const Service: React.FC = () => {
  return (
    <div className="min-h-screen">
      <ScrollStack>
        <ScrollStackItem index={0} logo={<ClipboardList className="w-12 h-12 text-blue-600" />}>
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Pick a suitable Plan</h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            We offer tailored services for personal, commercial, and industrial spaces,
            ensuring quality solutions for every need.
          </p>
        </ScrollStackItem>

        <ScrollStackItem index={1} logo={<Calendar className="w-12 h-12 text-green-600" />}>
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Set your schedule</h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Our intuitive scheduling tool adapts to your lifestyle, enabling easy planning
            and efficient time management for exceptional customer service.
          </p>
        </ScrollStackItem>

        <ScrollStackItem index={2} logo={<CheckCircle2 className="w-12 h-12 text-purple-600" />}>
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Get things done</h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Our platform boosts focus and organization, enabling easy progress tracking
            and task completion. Simply book with us and relax as we efficiently handle everything.
          </p>
        </ScrollStackItem>
      </ScrollStack>
    </div>
  );
};

export default Service;
