from flask import Flask, request, send_file, jsonify
from flask_cors import CORS
import matplotlib.pyplot as plt
import numpy as np
import io
import os

app = Flask(__name__)
CORS(app)

# Sample house plans (add more as needed)
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
    'P9cgFFtBnqC': {
        'title': 'Eco-Friendly Smart Home',
        'sq_ft': 2200,
        'style': 'Modern',
        'bedrooms': 4,
        'features': ['solar panels', 'green roof'],
        'rooms': {
            'living': (16, 14),
            'kitchen': (13, 12),
            'master_bed': (15, 12),
            'bed2': (10, 10),
            'bed3': (10, 10),
            'bed4': (10, 10),
            'bath1': (8, 6),
            'bath2': (7, 5)
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
    buf = io.BytesIO()
    plt.savefig(buf, format='png')
    plt.close(fig)
    buf.seek(0)
    return buf

@app.route('/generate-plan', methods=['POST'])
def generate_plan():
    data = request.get_json()
    model_id = data.get('model_id')
    if not model_id or model_id not in house_plans:
        return jsonify({'error': 'Invalid or missing model_id'}), 400
    plan = house_plans[model_id]
    buf = generate_2d_floor_plan(plan)
    return send_file(buf, mimetype='image/png', as_attachment=True, download_name='floor_plan.png')

if __name__ == '__main__':
    app.run(debug=True) 