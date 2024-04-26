import frappe



def get_context(context):
    count = frappe.db.count('Property')
    page = frappe.form_dict.page
    if page is None :
        page = 0
    else :
        page = (int(page)-1) + 3
        # page = int(page) 
        
    # page = 1 if frappe.form_dict['page'] is None else int(frappe.form_dict['page'])     
    agents = frappe.db.get_list('Agent', fields=['agent_name', 'phone','email','image'],)
    properties = frappe.db.get_list('Property',
        fields=['name','property_name', 'address','grand_total','status','image'],
        order_by='creation desc',
        start=page,
        page_length= 4
    )
    
    context.agents = agents
    context.properties = properties
    return context 