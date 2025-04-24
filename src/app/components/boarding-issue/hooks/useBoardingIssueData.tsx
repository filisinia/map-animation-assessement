import { InfoMessageType } from '@/components/info-message';

export const useBoardingIssueData = (isAnimated: boolean) => {
  const data = {
    type: {
      default: 'error' as InfoMessageType,
      animated: 'success' as InfoMessageType,
    },
    time: {
      default: '105-75',
      animated: '15',
    },
    title: {
      default: 'Airlines',
      animated: 'BLACK JET',
    },
    text: {
      default: (
        <>
          Congested terminals <span className="text-primary/60">and </span>
          drawn-out security lines
        </>
      ),
      animated: 'Private terminal boarding',
    },
  };

  return {
    type: isAnimated ? data.type.animated : data.type.default,
    time: isAnimated ? data.time.animated : data.time.default,
    title: isAnimated ? data.title.animated : data.title.default,
    text: isAnimated ? data.text.animated : data.text.default,
  };
};
