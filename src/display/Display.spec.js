// Test away!
import React from 'react';
import {render, fireEvent } from 'react-testing-library';
import "jest-dom/extend-expect";
import 'react-testing-library/cleanup-after-each';
import Display from './Display';

describe('<Display />', () => {
    it('defaults to unlocked and open', () => {
        const check = jest.fn();
        const {getByText} = render(<Display />);

        expect(getByText(/unlocked/i)).toBeInTheDocument();
        expect(getByText(/open/i)).toBeInTheDocument();
        expect()
    });

    it('displays a red-led class', () => {
        const {getByText} = render (<Display closed={true} locked={true} />);
        expect(getByText(/closed/i)).toHaveClass('red-led');
        expect(getByText(/locked/i)).toHaveClass('red-led');
    })

    it('displays a green-led class', () => {
        const {getByText} = render (<Display open={true} unlocked={true} />);
        expect(getByText(/open/i)).toHaveClass('green-led');
        expect(getByText(/unlocked/i)).toHaveClass('green-led');
    })

    it("displays closed if the closed is true and open if otherwise", () => {
		const closed = render(<Display closed={true} />);
		expect(closed.getByText(/closed/i)).toBeInTheDocument();
		const open = render(<Display closed={false} />);
		expect(open.getByText(/open/i)).toBeInTheDocument();
	});

	it("displays locked if the locked prop is true and unlocked if otherwise", () => {
		const locked = render(<Display locked={true} />);
		expect(locked.getByText(/locked/i)).toBeInTheDocument();
		const unlocked = render(<Display locked={false} />);
		expect(unlocked.getByText(/unlocked/i)).toBeInTheDocument();
	});
})