type SegmentedControlFixtureProps = {
    value?: string | null;
    orientation?: 'horizontal' | 'vertical';
    disabled?: boolean;
    onValueChange?: (value: string) => void;
};
declare const SegmentedControlFixture: import("svelte").Component<SegmentedControlFixtureProps, {}, "value">;
type SegmentedControlFixture = ReturnType<typeof SegmentedControlFixture>;
export default SegmentedControlFixture;
