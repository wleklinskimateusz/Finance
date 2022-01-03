export function AddExtraProps(Component, extraProps) {
    return <Component.type {...Component.props} {...extraProps} />;
}