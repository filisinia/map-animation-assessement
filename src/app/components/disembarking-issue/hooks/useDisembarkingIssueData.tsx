import { InfoMessageType } from '@/components/info-message';

export const useDisembarkingIssueData = (isAnimated: boolean) => {
  const data = {
    type: {
      default: 'error' as InfoMessageType,
      animated: 'success' as InfoMessageType,
    },
    time: {
      default: '30-15',
      animated: '9',
    },
    title: {
      default: 'Airlines',
      animated: 'BLACK JET',
    },
    text: {
      default: (
        <>
          Prolonged disembarking
          <span className="text-primary/60"> from the airplane</span>
        </>
      ),
      animated: (
        <>
          Swift exit
          <span className="text-primary/60"> via private terminal</span>
        </>
      ),
    },
  };

  return {
    type: isAnimated ? data.type.animated : data.type.default,
    time: isAnimated ? data.time.animated : data.time.default,
    title: isAnimated ? data.title.animated : data.title.default,
    text: isAnimated ? data.text.animated : data.text.default,
  };
};
