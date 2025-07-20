# generate_plan.py
# Download and run this script locally to generate 2D plans, elevations, and cost estimates.
# Requirements: matplotlib, numpy
# Install with: pip install matplotlib numpy

import matplotlib.pyplot as plt
import numpy as np
from datetime import datetime

house_plans = {
    'vNtptZXMm8U': {
        'title': 'Residential Real Estate Example 5',
        'sq_ft': 2500,
        'style': 'Modern',
        'bedrooms': 4,
        'features': ['open kitchen', 'backyard patio'],
        'rooms': {
            'living': (18, 14),
            'kitchen': (14, 12),
            'master_bed': (16, 12),
            'bed2': (11, 10),
            'bed3': (11, 10),
            'bed4': (11, 10),
            'bath1': (8, 6),
            'bath2': (7, 5),
            'patio': (20, 10)
        }
    },
    # ...add more plans as needed
}

def to_feet_inches(feet):
    whole = int(feet)
    inches = round((feet-whole)*12)
    return f"{whole}' {inches}"

def generate_2d_floor_plan(plan):
    fig, ax = plt.subplots(figsize=(10,8))
    ax.set_title(f"2D Floor Plan: {plan['title']} ({plan['sq_ft']} sq ft)")
    ax.set_xlabel('Width (feet)')
    ax.set_ylabel('Length (feet)')
    x_pos = 0
    y_pos = 0
    for room, dims in plan['rooms'].items():
        w, l = dims
        rect = plt.Rectangle((x_pos, y_pos), w, l, edgecolor='black', facecolor='lightblue', alpha=0.5)
        ax.add_patch(rect)
        ax.text(x_pos+w/2, y_pos+l/2, f"{room}\n{to_feet_inches(w)} x {to_feet_inches(l)}", ha='center')
        x_pos += w + 2
        if x_pos > 50:
            x_pos = 0
            y_pos += max([d[1] for d in plan['rooms'].values()])+2
    ax.set_xlim(0, 60)
    ax.set_ylim(0, 60)
    ax.grid(True)
    plt.savefig('floor_plan.png')
    print('2D Floor Plan saved as floor_plan.png')

def generate_elevations(plan):
    height = 20
    width = sum([d[0] for d in plan['rooms'].values()][:3])
    print(f"Front Elevation: {to_feet_inches(width)} wide x {to_feet_inches(height)} high")
    fig, ax = plt.subplots(figsize=(8,6))
    ax.set_title('Side Elevation')
    rect = plt.Rectangle((0, 40), width, height, edgecolor='black', facecolor='gray', alpha=0.3)
    ax.add_patch(rect)
    ax.text(width/2, 50, f"Height: {to_feet_inches(height)}\nRoof pitch: 4/12", ha='center')
    plt.savefig('side_elevation.png')
    print('Side Elevation saved as side_elevation.png')

def generate_details(plan):
    details = [
        'Foundation: Concrete slab, 4" thick, reinforced with #4 rebar at 24" o.c.',
        'Walls: 8" CMU block, stucco finish, R-13 insulation.',
        'Roof: Asphalt shingles, 30-year warranty, truss system per Florida Building Code wind loads.',
        'Windows: Rated double-pane, per energy code.',
        'Electrical: 200A service, per NEC.',
        'Plumbing: PEX supply, code fixtures.',
        f"HVAC: SEER 16 unit, sized for {plan['sq_ft']} sq ft.",
        'Compliance: Meets Florida Building Code 2023, Chapter 3 for residential planning.'
    ]
    print('Construction Details:')
    for d in details:
        print(f'- {d}')

def create_estimate_and_draw(plan):
    sq_ft = plan['sq_ft']
    cost_per_sq_ft = 250
    construction_cost = sq_ft * cost_per_sq_ft
    permit_fees = construction_cost * 0.01
    contractor_fee = (construction_cost + permit_fees) * 0.20
    total_cost = construction_cost + permit_fees + contractor_fee
    print(f"\nDetailed Project Estimate for {plan['title']} ({sq_ft} sq ft):")
    print(f"Construction Cost: ${construction_cost:,.2f}")
    print(f"Permit Fees: ${permit_fees:,.2f}")
    print(f"Contractor Fee (20%): ${contractor_fee:,.2f}")
    print(f"Total Estimated Cost: ${total_cost:,.2f}")
    draws = [
        ("Initial Deposit/Planning", 0.10, "Upon loan approval"),
        ("Foundation/Site Prep", 0.15, "After site clearing and foundation pour"),
        ("Framing/Rough-In", 0.30, "After framing complete, plumbing/electrical rough-in"),
        ("Interior Finish", 0.30, "After drywall, painting, fixtures"),
        ("Final Completion", 0.15, "After inspections and CO")
    ]
    print("\nDraw Schedule for Bank Approval:")
    for phase, pct, milestone in draws:
        print(f"{phase}: ${total_cost*pct:,.2f} {milestone}")

def main(chosen_id='vNtptZXMm8U'):
    if chosen_id not in house_plans:
        print('Invalid model ID.')
        return
    plan = house_plans[chosen_id]
    print(f"Processing chosen plan: {plan['title']}")
    generate_2d_floor_plan(plan)
    generate_elevations(plan)
    generate_details(plan)
    create_estimate_and_draw(plan)

main() 