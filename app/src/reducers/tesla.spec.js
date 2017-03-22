import Reducer from './tesla';

describe('test reducer', () => {
  let initialState  = null;
  let expectedState = null;

  beforeEach(() => {
    initialState = {
      carstats: [
        {miles: 246, model: '60'},
        {miles: 250, model: '60D'},
        {miles: 297, model: '75'},
        {miles: 306, model: '75D'},
        {miles: 336, model: '90D'},
        {miles: 376, model: 'P100D'}
      ],
      config: {
        speed: 55,
        temperature: 20,
        climate: true,
        wheels: 19
      }
    };
  });

  it('should handle initial state', () => {
    expect(
      Reducer(undefined, {})
    ).toEqual(initialState);
  });

  it('should handle CHANGE_CLIMATE', () => {
    expectedState = {
      carstats:[
        {miles:267, model:'60'},
        {miles:273, model:'60D'},
        {miles:323, model:'75'},
        {miles:334, model:'75D'},
        {miles:366, model:'90D'},
        {miles:409, model:'P100D'}
      ],
      config: {
        speed: 55,
        temperature: 20,
        climate: false,
        wheels: 19
      }
    };
    
    expect(
      Reducer(initialState, {
        type: 'CHANGE_CLIMATE'
      })
    ).toEqual(expectedState);
  });

  it('should handle SPEED_UP', () => {
    expectedState = {
      carstats:[
        {miles:225, model:'60'},
        {miles:229, model:'60D'},
        {miles:272, model:'75'},
        {miles:280, model:'75D'},
        {miles:308, model:'90D'},
        {miles:345, model:'P100D'}
      ],
      config: {
        speed: 60,
        temperature: 20,
        climate: true,
        wheels: 19
      }
    };

    expect(
      Reducer(initialState, {
        type: 'SPEED_UP',
        value: 55,
        step: 5,
        maxValue: 70
      })
    ).toEqual(expectedState);
  });

  it('should handle SPEED_DOWN', () => {
    expectedState = {
      carstats:[
        {miles:267, model:'60'},
        {miles:271, model:'60D'},
        {miles:323, model:'75'},
        {miles:332, model:'75D'},
        {miles:365, model:'90D'},
        {miles:409, model:'P100D'}
      ],
      config: {
        speed: 50,
        temperature: 20,
        climate: true,
        wheels: 19
      }
    };

    expect(
      Reducer(initialState, {
        type: 'SPEED_DOWN',
        value: 55,
        step: 5,
        minValue: 45
      })
    ).toEqual(expectedState);
  });

  it('should handle TEMPERATURE_UP', () => {
    expectedState = {
      carstats:[
        {miles:245, model:'60'},
        {miles:251, model:'60D'},
        {miles:297, model:'75'},
        {miles:307, model:'75D'},
        {miles:337, model:'90D'},
        {miles:379, model:'P100D'}
      ],
      config: {
        speed: 55,
        temperature: 30,
        climate: true,
        wheels: 19
      }
    };

    expect(
      Reducer(initialState, {
        type: 'TEMPERATURE_UP',
        value: 20,
        step: 10,
        maxValue: 40
      })
    ).toEqual(expectedState);
  });

  it('should handle TEMPERATURE_DOWN', () => {
    expectedState = {
      carstats:[
        {miles:242, model:'60'},
        {miles:247, model:'60D'},
        {miles:293, model:'75'},
        {miles:302, model:'75D'},
        {miles:332, model:'90D'},
        {miles:372, model:'P100D'}
      ],
      config: {
        speed: 55,
        temperature: 10,
        climate: true,
        wheels: 19
      }
    };

    expect(
      Reducer(initialState, {
        type: 'TEMPERATURE_DOWN',
        value: 20,
        step: 10,
        minValue: -10
      })
    ).toEqual(expectedState);
  });

  it('should handle CHANGE_WHEEL', () => {
    expectedState = {
      carstats:[
        {miles:241, model:'60'},
        {miles:246, model:'60D'},
        {miles:291, model:'75'},
        {miles:300, model:'75D'},
        {miles:330, model:'90D'},
        {miles:358, model:'P100D'}
      ],
      config: {
        speed: 55,
        temperature: 20,
        climate: true,
        wheels: 21
      }
    };

    expect(
      Reducer(initialState,{
        type: 'CHANGE_WHEEL',
        value: 21
      })
    ).toEqual(expectedState);
  });
});

