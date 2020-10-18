# -react-native-boilerplate
This is an simple react native boilerplate
Architecture

The driving goal of the architecture of the boilerplate is separation of concerns. Namely:

    Presentational components are separated from containers (aka "screens"). 
    State is managed using global Redux stores. 
    With Redux, state is shared using global stores, and changes are predictable: actions are applied by reducers to the state. While the pattern can be a bit much for small projects, the clear separation of responsibilities and predictability helps with bigger applications.
    2 Additional test are written, For splash screen and for dispatching an action.
    
    Main Directory layout

    App/Actions: Actions for app state
    App/Assets: assets like Images files used by the application
    App/Components: presentational components
    App/Config: configuration of the application
    App/Containers: container components, i.e. the application's screens
    App/Navigators: react navigation navigators
    App/Reducers: Reducers 
    App/Store: Creating Store with thunk middleware
    App/Utils: All helpers files like Colors, Constants, Images, Redux Constants and styles
